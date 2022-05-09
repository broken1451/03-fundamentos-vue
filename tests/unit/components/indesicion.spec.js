import { shallowMount } from "@vue/test-utils";
import Indecision from "../../../src/components/indecision";

describe("Indesicion component", () => {
  let wrapper;
  let clgSpy;

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          answer: "yes",
          forced: false,
          image: "https://yesno.wtf/assets/yes/2.gif",
        }),
    })
  );

  beforeEach(() => {
    wrapper = shallowMount(Indecision);
    clgSpy = jest.spyOn(console, "log");
    jest.clearAllMocks();
  });

  it("debe de hacer match con el snapshot / debe de ser igual a la fotografia ", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("Escribir en el input no debe de disparar nada (console.log)", async () => {
    // vm es la instancia de vue
    const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer");

    const input = wrapper.find("input");
    await input.setValue("Hola q tal");

    // expect(clgSpy).toHaveBeenCalled();
    expect(clgSpy).toHaveBeenCalledTimes(1);
    expect(getAnswerSpy).not.toHaveBeenCalled();
    // console.log(wrapper.vm);
    // mockConstructor: es una funcion que esta siendo simulada para que yo pueda evaluar si ha sido llamada o no
  });

  it('Escribit el "?" debe de disparar el getAnswer ', async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer");
    const input = wrapper.find("input");
    await input.setValue("Hola q tal?");
    expect(clgSpy).toHaveBeenCalledTimes(1);
    expect(getAnswerSpy).toHaveBeenCalled();
  });

  it("Pruebas en metodo getAnswer", async () => {
    await wrapper.vm.getAnswer();
    const img = wrapper.find("img");
    expect(img.exists()).toBeTruthy();
    expect(wrapper.vm.img).toBe("https://yesno.wtf/assets/yes/2.gif");
    expect(wrapper.vm.answer).toBe("Si!");
    // console.log(wrapper.vm.img);
    // console.log(wrapper.vm.answer);
  });

  it("Pruebas en metodo getAnswer - Fallo en el API", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("API is down"));
    await wrapper.vm.getAnswer();
    const img = wrapper.find("img");
    expect(img.exists()).toBeFalsy();
    expect(wrapper.vm.answer).toBe("No se pudo cargar del API");
  });
});
