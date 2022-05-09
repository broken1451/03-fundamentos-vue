// import moduleName from '../../../src/components/Counter.vue';
import Counter from "@/components/Counter.vue"; // va a hacer referencia al punto de entrada de la aplicacion(punto donde se encuentra el source de la misma)
import { shallowMount, mount } from "@vue/test-utils";

// mount: monta todo el componente y los subcomponentes y hace todo un procedimiento mas pesado de renderizacion y montado
// shallowMount solo monta el componente no tan profunda como el mount

describe("Counter Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Counter);
  });

  // it('debe de hacer match con el snapshot / debe de ser igual a la fotografia ', () => {
  //     const wrapper =  shallowMount(Counter);

  //     // console.log(wrapper);
  //     expect(wrapper.html()).toMatchSnapshot();

  // });
  it("h2 debe tener el valor por defecto de Counter", () => {
    // expect(wrapper.find('h20').exists()).toBe(true)
    expect(wrapper.find("h2").exists()).toBeTruthy();

    const h2 = wrapper.find("h2").text();
    expect(h2).toBe("Counter");
  });

  it("el valor por defecto debe ser 100 en la segunda etiqueta p", () => {
    //wrapper

    // ptags
    const p = wrapper.find('[data-testid="counter"]').text(); // [nameAtributte] <-- un atributo q estoy buscando
    expect(p).toBe("100");
  });

  it("debe de incrementar en 1 el valor del contador ", async () => {
    const btnIncrease = wrapper.find("button");
    await btnIncrease.trigger("click"); // dispara evento

    const value = wrapper.find('[data-testid="counter"]').text();
    console.log({ value });
    expect(value).toBe("101");
  });

  it("debe de decrementar en 1 el valor del contador", async () => {
    const btndecrease = wrapper.findAll("button")[1];
    await btndecrease.trigger("click"); // dispara evento

    const value = wrapper.find('[data-testid="counter"]').text();
    console.log({ value });
    expect(value).toBe("99");
  });

  it("debe de decrementar/incrementar en 1 el valor del contador", async () => {
    const [btnIncrease, btndecrease] = wrapper.findAll("button");
    await btndecrease.trigger("click"); // dispara evento
    await btndecrease.trigger("click"); // dispara evento
    await btndecrease.trigger("click"); // dispara evento
    await btndecrease.trigger("click"); // dispara evento
    await btnIncrease.trigger("click"); // dispara evento
    await btnIncrease.trigger("click"); // dispara evento
    await btnIncrease.trigger("click"); // dispara evento
    await btnIncrease.trigger("click"); // dispara evento
    await btnIncrease.trigger("click"); // dispara evento
    await btnIncrease.trigger("click"); // dispara evento
    await btnIncrease.trigger("click"); // dispara evento

    const value = wrapper.find('[data-testid="counter"]').text();
    expect(value).toBe("103");
  });

  it("debe de establecer el valor por defecto", () => {
    // const start = wrapper.props('start')
    const { start } = wrapper.props();
    const value = wrapper.find('[data-testid="counter"]').text();
    expect(Number(value)).toBe(start);
  });

  it("debe de mostrar la prop title", () => {
    const title = "hola mundo";
    const wrapper = shallowMount(Counter, {
      props: {
        title,
      },
    });

    const { start } = wrapper.props();
    const value = wrapper.find('[data-testid="counter"]').text();

    const h2 = wrapper.find("h2").text();

    expect(Number(value)).toBe(start);
    expect(h2).toBe(title);
  });
});

// // import moduleName from '../../../src/components/Counter.vue';
// import Counter from '@/components/Counter.vue'; // va a hacer referencia al punto de entrada de la aplicacion(punto donde se encuentra el source de la misma)
// import {shallowMount, mount} from '@vue/test-utils';

// // mount: monta todo el componente y los subcomponentes y hace todo un procedimiento mas pesado de renderizacion y montado
// // shallowMount solo monta el componente no tan profunda como el mount

// describe('Counter Component', () => {
//     // it('debe de hacer match con el snapshot / debe de ser igual a la fotografia ', () => {
//     //     const wrapper =  shallowMount(Counter);

//     //     // console.log(wrapper);
//     //     expect(wrapper.html()).toMatchSnapshot();

//     // });
//     it('h2 debe tener el valor por defecto de Counter', () => {
//         const wrapper =  shallowMount(Counter);

//         // expect(wrapper.find('h20').exists()).toBe(true)
//         expect(wrapper.find('h2').exists()).toBeTruthy()

//         const h2 = wrapper.find('h2').text()
//         // console.log(h2.text());
//         // expect(h2.text()).toBe('Counter')
//         expect(h2).toBe('Counter')

//     });

//     it('el valor por defecto debe ser 100 en la segunda etiqueta p', () => {

//         //wrapper
//         const wrapper =  shallowMount(Counter);

//         // ptags
//         // const p = wrapper.findAll('p');
//         const p = wrapper.find('[data-testid="counter"]').text(); // [nameAtributte] <-- un atributo q estoy buscando

//         // expect segundo p == 100
//         // expect(p[1].text()).toBe('100')
//         // expect(Number(p[1].text())).toBe(100)
//         expect(p).toBe('100');
//     });

//     it('debe de incrementar en 1 el valor del contador ', async() => {

//         const wrapper =  shallowMount(Counter);

//         const btnIncrease =  wrapper.find('button');
//         await  btnIncrease.trigger('click'); // dispara evento

//         const value = wrapper.find('[data-testid="counter"]').text();
//         console.log({value});
//         expect(value).toBe('101');
//     });

//     it('debe de decrementar en 1 el valor del contador', async () => {
//         const wrapper =  shallowMount(Counter);

//         const btndecrease =  wrapper.findAll('button')[1];
//         await btndecrease.trigger('click'); // dispara evento

//         const value = wrapper.find('[data-testid="counter"]').text();
//         console.log({value});
//         expect(value).toBe('99');
//     });
// });
