document.addEventListener("DOMContentLoaded", () => {

    const consoleTabs = document.querySelectorAll(".console-tab");
    const tacticalViews = document.querySelectorAll(".tab-view");

    if (consoleTabs.length > 0) {
        consoleTabs.forEach(selectedTab => {
            selectedTab.addEventListener("click", () => {
                consoleTabs.forEach(tab => tab.classList.remove("active-tab"));
                tacticalViews.forEach(view => view.classList.remove("active-view"));

                selectedTab.classList.add("active-tab");
                const parsedIdToken = "content-" + selectedTab.id.replace("tab-", "");
                const targetedViewNode = document.getElementById(parsedIdToken);

                if (targetedViewNode) {
                    targetedViewNode.classList.add("active-view");
                }
            });
        });
    }

    const weaponInputFilter = document.getElementById("weapon-search");
    const weaponRowsCollection = document.querySelectorAll(".weapon-row");

    if (weaponInputFilter) {
        weaponInputFilter.addEventListener("keyup", (event) => {
            const currentSearchQuery = event.target.value.toLowerCase().trim();

            weaponRowsCollection.forEach(row => {
                const textContentValue = row.textContent.toLowerCase();
                if (textContentValue.includes(currentSearchQuery)) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
            });
        });
    }

    const animatedElements = document.querySelectorAll(".scroll-reveal");

    const elementRevealEvaluation = () => {
        animatedElements.forEach(item => {
            const boundaryTopOffset = item.getBoundingClientRect().top;
            const screenThresholdHeight = window.innerHeight - 60;

            if (boundaryTopOffset < screenThresholdHeight) {
                item.classList.add("revealed");
            }
        });
    };

    if (animatedElements.length > 0) {
        elementRevealEvaluation(); 
        window.addEventListener("scroll", elementRevealEvaluation);
    }

    const feedbackFormContainer = document.querySelector(".feedback-form");
    if (feedbackFormContainer) {
        feedbackFormContainer.addEventListener("submit", () => {
            alert("// ACCESS LOG Dispatched: Tactical Operations feedback sequence verified. Initiating mail transfer pipeline protocol.");
        });
    }
});