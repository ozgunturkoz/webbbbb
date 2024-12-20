const policy = document.querySelectorAll(".policyAcordion");

policy.forEach((policyAcordion) => {
    policyAcordion.addEventListener("click", () => {
        policyAcordion.classList.toggle("active");
    });
});
