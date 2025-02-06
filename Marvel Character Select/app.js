(() => {
	const modelViewers = document.querySelectorAll("model-viewer");
	const cards = document.querySelectorAll(".card");
	const defaultOrbit = "0deg 90deg 164m";
	const applyOrbit = (modelViewer, orbit, vert) => {
		modelViewer.setAttribute("camera-orbit", orbit);
		modelViewer.setAttribute("interpolation-decay", "200");
		modelViewer.setAttribute("camera-target", `0m ${vert}m 10m`);
	};
	cards.forEach((card, index) => {
		const modelViewer = modelViewers[index];
		if (modelViewer) {
			const calcOrbit = (xPos, cardRect) => {
				const normalizedX = (xPos - cardRect.left) / cardRect.width;
				const angle = normalizedX * 90 - 45;
				return `${-angle}deg 90deg 164m`;
			};
			card.addEventListener("mousemove", (event) => {
				const cardRect = card.getBoundingClientRect();
				const orbit = calcOrbit(event.clientX, cardRect);
				applyOrbit(modelViewer, orbit, 120);
			});
			card.addEventListener("mouseleave", () => {
				applyOrbit(modelViewer, defaultOrbit, 140);
			});
			modelViewer.addEventListener("load", () => {
				modelViewer.classList.add("loaded");
			});
		} else {
			console.log(`No model found for card at i:${index}`);
		}
	});
})();
