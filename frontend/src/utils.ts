const initMap = (fetchStateData: Function, reloadState: Function) => {
  const states = document.querySelectorAll<HTMLDivElement>("#map .state");

  states.forEach((state) => {
    state.addEventListener("click", async (e) => {
      reloadState();
      e.preventDefault();
      document.querySelector<HTMLDivElement>("#map")?.classList.add("move-map");

      const estado = state.getAttribute("data-state");
      const box_estado = `#box_${estado}`;

      // Reseta o estado e seu label para a cor padrão
      document
        .querySelectorAll<HTMLDivElement>(".state .label_icon_state")
        .forEach((label) => {
          label.style.fill = "#666";
        });
      document
        .querySelectorAll<HTMLDivElement>(".state .shape")
        .forEach((shape) => {
          shape.style.fill = "#ddd";
        });

      // Colore o estado selecionado
      document.querySelector<HTMLDivElement>(
        `#state_${estado} .label_icon_state`
      )!.style.fill = "#FFF";

      if (estado !== "df") {
        document.querySelector<HTMLDivElement>(
          `#state_${estado} .shape`
        )!.style.fill = "#fd7132";
      }

      //Verifica se o cadastro de contato do estado existe
      const box = document.querySelector<HTMLDivElement>(box_estado);
      if (!box) {
        console.log("Não existe");
      } else {
        document
          .querySelectorAll<HTMLDivElement>(".parca .estado")
          .forEach((parca) => {
            parca.classList.add("some");
            parca.style.opacity = "0";
            parca.style.visibility = "hidden";
          });

        box.classList.remove("some");
        box.style.opacity = "1";
        box.style.visibility = "visible";
      }

      document
        .querySelectorAll<HTMLParagraphElement>("#loading")
        .forEach((test) => (test.style.display = "block"));

      await fetchStateData();
    });
  });

  const selector = document.querySelector<HTMLSelectElement>("#seletory");
  if (selector) {
    selector.addEventListener("change", () => {
      document
        .querySelectorAll<HTMLDivElement>(".parca .estado")
        .forEach((parca) => {
          parca.style.opacity = "0";
          parca.style.visibility = "hidden";
        });
      document.querySelector<HTMLDivElement>(
        `#box_${selector.value}`
      )!.style.opacity = "1";
      document.querySelector<HTMLDivElement>(
        `#box_${selector.value}`
      )!.style.visibility = "visible";
    });
  }
};

export { initMap };
