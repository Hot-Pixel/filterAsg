const containerEl = document.querySelector(".container");
const loadMoreEl = document.querySelector(".load-more");
let currentLimit = 4;
let incrementAmount = 4;

const mixer = mixitup(containerEl, {
  multifilter: {
    enable: true,
    parseOn: "submit",
  },
  controls: {
    enable: true,
  },
  pagination: {
    limit: currentLimit,
  },
//   callbacks: {
//     onMixEnd: handleMixEnd,
//   },
});

// function handleMixEnd(state) {
//     // At the end of each operation, we must check whether the current
//     // matching collection of target elements has additional hidden
//     // elements, and enable or disable the load more button as
//     // appropriate

//     if (state.activePagination.limit + incrementAmount >= state.totalMatching) {
//         // Disable button

//         loadMoreEl.disabled = true;
//     } else if (loadMoreEl.disabled) {
//         // Enable button

//         loadMoreEl.disabled = false;
//     }
// }

function handleLoadMoreClick() {
    // On each click of the load more button, we increment
    // the current limit by a defined amount

    currentLimit += incrementAmount;

    mixer.paginate({limit: currentLimit});
}

loadMoreEl.addEventListener('click', handleLoadMoreClick);

const pepito1 = document.querySelector("#pepito1");
const pepito2 = document.querySelector("#pepito2");
const pepito3 = document.querySelector("#pepito3");

pepito1.addEventListener("click", () => {
  mixer.setFilterGroupSelectors("pepitos", ".pepito1");
  mixer.parseFilterGroups();
});
pepito2.addEventListener("click", () => {
  mixer.setFilterGroupSelectors("pepitos", ".pepito2");
  mixer.parseFilterGroups();
});
pepito3.addEventListener("click", () => {
  mixer.setFilterGroupSelectors("pepitos", ".pepito3");
  mixer.parseFilterGroups();
});
