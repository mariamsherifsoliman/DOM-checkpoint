document.addEventListener("DOMContentLoaded", function () {
    let items = Array.from(document.querySelectorAll(".item"))
    const totalAmount = document.getElementById("totalAmount")

    function updateTotal() {
        let total = 0;
        items.forEach((item) => {
            const quantity = parseInt(item.querySelector(".quantity").textContent)
            const price = parseFloat(item.querySelector(".price").textContent.replace("EGP", "").trim())
            total += quantity * price
        })
        totalAmount.textContent = total.toFixed(2) + " EGP"
    }

    items.forEach((item) => {
        const decrementButton = item.querySelector(".decrement")
        const incrementButton = item.querySelector(".increment")
        const deleteButton = item.querySelector(".delete")
        const likeButton = item.querySelector(".like")
        const quantityElement = item.querySelector(".quantity")

        decrementButton.addEventListener("click", () => {
            let quantity = parseInt(quantityElement.textContent)
            if (quantity > 1) {
                quantity--
                quantityElement.textContent = quantity
                updateTotal()
            }
        });

        incrementButton.addEventListener("click", () => {
            let quantity = parseInt(quantityElement.textContent);
            quantity++
            quantityElement.textContent = quantity
            updateTotal()
        });

        deleteButton.addEventListener("click", () => {
            item.remove()
            items = items.filter((cartItem) => cartItem !== item)
            updateTotal()
        })

        likeButton.addEventListener("click", () => { //not working ☹️
            likeButton.classList.toggle("liked")
        });
    })

    updateTotal()
});
