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
      if (box) {
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

      await fetchStateData(estado?.toLocaleUpperCase());
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

const getCodUF = (nomeUF: string): number => {
  const ufCods: {[index: string]: number} = {
    AC: 12,
    AL: 27,
    AP: 16,
    AM: 13,
    BA: 29,
    CE: 23,
    DF: 53,
    ES: 32,
    GO: 52,
    MA: 21,
    MT: 51,
    MS: 50,
    MG: 31,
    PA: 15,
    PB: 25,
    PR: 41,
    PE: 26,
    PI: 22,
    RJ: 33,
    RN: 24,
    RS: 43,
    RO: 11,
    RR: 14,
    SC: 42,
    SP: 35,
    SE: 28,
    TO: 17,
  };

  if (nomeUF in ufCods) return ufCods[nomeUF];
  else return ufCods["PE"];
};

const messageHandler = (io: any, socket: any) => {
  const createdMessage = (msg: string) => {
    socket.broadcast.emit("newIncomingMessage", msg);
  };

  socket.on("createdMessage", createdMessage);
};

export { initMap, getCodUF, messageHandler };
