const Tab = ({ active, setActive }) => {
  const dropdown = document.querySelectorAll(".dropdown");
  if (dropdown) {
    dropdown.forEach((item) => {
      const dropdownBtn = item.querySelector(".dropdown__button");
      const dropdownContent = item.querySelector(".dropdown__content");
      dropdownBtn.addEventListener("click", () => {
        dropdownContent.classList({ active });
        dropdownBtn.classList({ active });
      });
      window.addEventListener("click", (e) => {
        if (
          !dropdownContent.contains(e.target) &&
          !dropdownBtn.contains(e.target)
        ) {
          setActive("");
          dropdownContent.classList({ active });
          dropdownBtn.classList({ active });
        }
      });
    });
  }
};
export default Tab;
