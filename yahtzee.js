document.addEventListener("DOMContentLoaded", function() {
    const selectElements = document.querySelectorAll('select[name^="entry1-"], select[name^="entry2-"]');
    
    selectElements.forEach(function(selectElement) {
        const cell = selectElement.parentNode;

        selectElement.addEventListener("change", function() {
            const selectedOption = selectElement.value;

            // Reset background color
            cell.classList.remove("red-background");
            cell.classList.remove("green-background");

            // Apply background color based on selected option
            if (selectedOption === "blank") {
                cell.classList.add("red-background");
            } else if (parseInt(selectedOption) >= 1) {
                cell.classList.add("green-background");
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const entry1_1 = document.querySelector('select[name="entry1-1"]');
    const entry1_2 = document.querySelector('select[name="entry1-2"]');
    const entry1_3 = document.querySelector('select[name="entry1-3"]');
    const entry1_4 = document.querySelector('select[name="entry1-4"]');
    const entry1_5 = document.querySelector('select[name="entry1-5"]');
    const entry1_6 = document.querySelector('select[name="entry1-6"]');
    const ut1 = document.getElementById('ut1');

    const updateTotal = () => {
        // Get values from select inputs
        const value1 = parseInt(entry1_1.value) || 0;
        const value2 = parseInt(entry1_2.value) || 0;
        const value3 = parseInt(entry1_3.value) || 0;
        const value4 = parseInt(entry1_4.value) || 0;
        const value5 = parseInt(entry1_5.value) || 0;
        const value6 = parseInt(entry1_6.value) || 0;

        // Calculate total
        const total = value1 + value2 + value3 + value4 + value5 + value6;

        // Display total in ut1 cell
        ut1.textContent = total;
        if (total < 63) {
        ub1.textContent = "-";
        ub1.setAttribute('value', '0');
    } else {
        ub1.textContent = "35";
        ub1.setAttribute('value', '35');
    }
    };

    // Call updateTotal function whenever there's a change in any of the select inputs
    entry1_1.addEventListener("change", updateTotal);
    entry1_2.addEventListener("change", updateTotal);
    entry1_3.addEventListener("change", updateTotal);
    entry1_4.addEventListener("change", updateTotal);
    entry1_5.addEventListener("change", updateTotal);
    entry1_6.addEventListener("change", updateTotal);

    // Initial calculation
    updateTotal();
});

//lower total 
document.addEventListener("DOMContentLoaded", function() {
    const entry1_7 = document.querySelector('select[name="entry1-7"]');
    const entry1_8 = document.querySelector('select[name="entry1-8"]');
    const entry1_9 = document.querySelector('select[name="entry1-9"]');
    const entry1_10 = document.querySelector('select[name="entry1-10"]');
    const entry1_11 = document.querySelector('select[name="entry1-11"]');
    const entry1_12 = document.querySelector('select[name="entry1-12"]');
    const entry1_13 = document.querySelector('select[name="entry1-13"]');
    const entry1_14 = document.querySelector('select[name="entry1-14"]');
    const lt1 = document.getElementById('lt1');

    const updateTotal = () => {
        // Get values from select inputs
        const value7 = parseInt(entry1_7.value) || 0;
        const value8 = parseInt(entry1_8.value) || 0;
        const value9 = parseInt(entry1_9.value) || 0;
        const value10 = parseInt(entry1_10.value) || 0;
        const value11 = parseInt(entry1_11.value) || 0;
        const value12 = parseInt(entry1_12.value) || 0;
        const value13 = parseInt(entry1_13.value) || 0;
        const value14 = parseInt(entry1_14.value) || 0;

        // Calculate total
        const total = value7 + value8 + value9 + value10 + value11 + value12 + value13 + value14;

        // Display total in lt1 cell
        lt1.textContent = total;
     
    };

    // Call updateTotal function whenever there's a change in any of the select inputs
    entry1_7.addEventListener("change", updateTotal);
    entry1_8.addEventListener("change", updateTotal);
    entry1_9.addEventListener("change", updateTotal);
    entry1_10.addEventListener("change", updateTotal);
    entry1_11.addEventListener("change", updateTotal);
    entry1_12.addEventListener("change", updateTotal);
    entry1_13.addEventListener("change", updateTotal);
    entry1_14.addEventListener("change", updateTotal);

    // Initial calculation
    updateTotal();
});

// TOTAL Player 1

document.addEventListener("DOMContentLoaded", function() {
    const entry1_1 = document.querySelector('select[name="entry1-1"]');
    const entry1_2 = document.querySelector('select[name="entry1-2"]');
    const entry1_3 = document.querySelector('select[name="entry1-3"]');
    const entry1_4 = document.querySelector('select[name="entry1-4"]');
    const entry1_5 = document.querySelector('select[name="entry1-5"]');
    const entry1_6 = document.querySelector('select[name="entry1-6"]');
    const entry1_7 = document.querySelector('select[name="entry1-7"]');
    const entry1_8 = document.querySelector('select[name="entry1-8"]');
    const entry1_9 = document.querySelector('select[name="entry1-9"]');
    const entry1_10 = document.querySelector('select[name="entry1-10"]');
    const entry1_11 = document.querySelector('select[name="entry1-11"]');
    const entry1_12 = document.querySelector('select[name="entry1-12"]');
    const entry1_13 = document.querySelector('select[name="entry1-13"]');
    const entry1_14 = document.querySelector('select[name="entry1-14"]');
    const ub1 = document.getElementById('ub1');
    const ts1 = document.getElementById('ts1');

    const updateTotal = () => {
        // Get values from select inputs
        const value1 = parseInt(entry1_1.value) || 0;
        const value2 = parseInt(entry1_2.value) || 0;
        const value3 = parseInt(entry1_3.value) || 0;
        const value4 = parseInt(entry1_4.value) || 0;
        const value5 = parseInt(entry1_5.value) || 0;
        const value6 = parseInt(entry1_6.value) || 0;
        const value7 = parseInt(entry1_7.value) || 0;
        const value8 = parseInt(entry1_8.value) || 0;
        const value9 = parseInt(entry1_9.value) || 0;
        const value10 = parseInt(entry1_10.value) || 0;
        const value11 = parseInt(entry1_11.value) || 0;
        const value12 = parseInt(entry1_12.value) || 0;
        const value13 = parseInt(entry1_13.value) || 0;
        const value14 = parseInt(entry1_14.value) || 0;
        const ub1Value = parseInt(ub1.textContent) || 0; // Parse the value of ub1

        // Calculate total
        const total = value1 + value2 + value3 + value4 + value5 + value6 + value7 + value8 + value9 + value10 + value11 + value12 + value13 + value14 + ub1Value;

        // Display total in ts1 cell
        ts1.textContent = total;
    };

    // Call updateTotal function whenever there's a change in any of the select inputs
    entry1_1.addEventListener("change", updateTotal);
    entry1_2.addEventListener("change", updateTotal);
    entry1_3.addEventListener("change", updateTotal);
    entry1_4.addEventListener("change", updateTotal);
    entry1_5.addEventListener("change", updateTotal);
    entry1_6.addEventListener("change", updateTotal);
    entry1_7.addEventListener("change", updateTotal);
    entry1_8.addEventListener("change", updateTotal);
    entry1_9.addEventListener("change", updateTotal);
    entry1_10.addEventListener("change", updateTotal);
    entry1_11.addEventListener("change", updateTotal);
    entry1_12.addEventListener("change", updateTotal);
    entry1_13.addEventListener("change", updateTotal);
    entry1_14.addEventListener("change", updateTotal);
    ub1.addEventListener("DOMSubtreeModified", updateTotal); // Listen for changes in ub1's content

    // Initial calculation
    updateTotal();
});



// PLAYER 2
document.addEventListener("DOMContentLoaded", function() {
    const entry2_1 = document.querySelector('select[name="entry2-1"]');
    const entry2_2 = document.querySelector('select[name="entry2-2"]');
    const entry2_3 = document.querySelector('select[name="entry2-3"]');
    const entry2_4 = document.querySelector('select[name="entry2-4"]');
    const entry2_5 = document.querySelector('select[name="entry2-5"]');
    const entry2_6 = document.querySelector('select[name="entry2-6"]');
    const ut2 = document.getElementById('ut2');

    const updateTotal = () => {
        // Get values from select inputs
        const value1 = parseInt(entry2_1.value) || 0;
        const value2 = parseInt(entry2_2.value) || 0;
        const value3 = parseInt(entry2_3.value) || 0;
        const value4 = parseInt(entry2_4.value) || 0;
        const value5 = parseInt(entry2_5.value) || 0;
        const value6 = parseInt(entry2_6.value) || 0;

        // Calculate total
        const total = value1 + value2 + value3 + value4 + value5 + value6;

        // Display total in ut1 cell
        ut2.textContent = total;
        if (total < 63) {
        ub2.textContent = "-";
        ub2.setAttribute('value', '0');
    } else {
        ub2.textContent = "35";
        ub2.setAttribute('value', '35');
    }
    };

    // Call updateTotal function whenever there's a change in any of the select inputs
    entry2_1.addEventListener("change", updateTotal);
    entry2_2.addEventListener("change", updateTotal);
    entry2_3.addEventListener("change", updateTotal);
    entry2_4.addEventListener("change", updateTotal);
    entry2_5.addEventListener("change", updateTotal);
    entry2_6.addEventListener("change", updateTotal);

    // Initial calculation
    updateTotal();
});



//lower total script player 2
document.addEventListener("DOMContentLoaded", function() {
    const entry2_7 = document.querySelector('select[name="entry2-7"]');
    const entry2_8 = document.querySelector('select[name="entry2-8"]');
    const entry2_9 = document.querySelector('select[name="entry2-9"]');
    const entry2_10 = document.querySelector('select[name="entry2-10"]');
    const entry2_11 = document.querySelector('select[name="entry2-11"]');
    const entry2_12 = document.querySelector('select[name="entry2-12"]');
    const entry2_13 = document.querySelector('select[name="entry2-13"]');
    const entry2_14 = document.querySelector('select[name="entry2-14"]');
    const lt2 = document.getElementById('lt2');

    const updateTotal = () => {
        // Get values from select inputs
        const value7 = parseInt(entry2_7.value) || 0;
        const value8 = parseInt(entry2_8.value) || 0;
        const value9 = parseInt(entry2_9.value) || 0;
        const value10 = parseInt(entry2_10.value) || 0;
        const value11 = parseInt(entry2_11.value) || 0;
        const value12 = parseInt(entry2_12.value) || 0;
        const value13 = parseInt(entry2_13.value) || 0;
        const value14 = parseInt(entry2_14.value) || 0;

        // Calculate total
        const total = value7 + value8 + value9 + value10 + value11 + value12 + value13 + value14;

        // Display total in lt2 cell
        lt2.textContent = total;
     
    };

    // Call updateTotal function whenever there's a change in any of the select inputs
    entry2_7.addEventListener("change", updateTotal);
    entry2_8.addEventListener("change", updateTotal);
    entry2_9.addEventListener("change", updateTotal);
    entry2_10.addEventListener("change", updateTotal);
    entry2_11.addEventListener("change", updateTotal);
    entry2_12.addEventListener("change", updateTotal);
    entry2_13.addEventListener("change", updateTotal);
    entry2_14.addEventListener("change", updateTotal);

    // Initial calculation
    updateTotal();
});

// TOTAL Player 2

document.addEventListener("DOMContentLoaded", function() {
    const entry2_1 = document.querySelector('select[name="entry2-1"]');
    const entry2_2 = document.querySelector('select[name="entry2-2"]');
    const entry2_3 = document.querySelector('select[name="entry2-3"]');
    const entry2_4 = document.querySelector('select[name="entry2-4"]');
    const entry2_5 = document.querySelector('select[name="entry2-5"]');
    const entry2_6 = document.querySelector('select[name="entry2-6"]');
    const entry2_7 = document.querySelector('select[name="entry2-7"]');
    const entry2_8 = document.querySelector('select[name="entry2-8"]');
    const entry2_9 = document.querySelector('select[name="entry2-9"]');
    const entry2_10 = document.querySelector('select[name="entry2-10"]');
    const entry2_11 = document.querySelector('select[name="entry2-11"]');
    const entry2_12 = document.querySelector('select[name="entry2-12"]');
    const entry2_13 = document.querySelector('select[name="entry2-13"]');
    const entry2_14 = document.querySelector('select[name="entry2-14"]');
    const ub2 = document.getElementById('ub2');
    const ts2 = document.getElementById('ts2');

    const updateTotal = () => {
        // Get values from select inputs
        const value1 = parseInt(entry2_1.value) || 0;
        const value2 = parseInt(entry2_2.value) || 0;
        const value3 = parseInt(entry2_3.value) || 0;
        const value4 = parseInt(entry2_4.value) || 0;
        const value5 = parseInt(entry2_5.value) || 0;
        const value6 = parseInt(entry2_6.value) || 0;
        const value7 = parseInt(entry2_7.value) || 0;
        const value8 = parseInt(entry2_8.value) || 0;
        const value9 = parseInt(entry2_9.value) || 0;
        const value10 = parseInt(entry2_10.value) || 0;
        const value11 = parseInt(entry2_11.value) || 0;
        const value12 = parseInt(entry2_12.value) || 0;
        const value13 = parseInt(entry2_13.value) || 0;
        const value14 = parseInt(entry2_14.value) || 0;
        const ub2Value = parseInt(ub2.textContent) || 0; // Parse the value of ub1

        // Calculate total
        const total = value1 + value2 + value3 + value4 + value5 + value6 + value7 + value8 + value9 + value10 + value11 + value12 + value13 + value14 + ub2Value;

        // Display total in ts2 cell
        ts2.textContent = total;
    };

    // Call updateTotal function whenever there's a change in any of the select inputs
    entry2_1.addEventListener("change", updateTotal);
    entry2_2.addEventListener("change", updateTotal);
    entry2_3.addEventListener("change", updateTotal);
    entry2_4.addEventListener("change", updateTotal);
    entry2_5.addEventListener("change", updateTotal);
    entry2_6.addEventListener("change", updateTotal);
    entry2_7.addEventListener("change", updateTotal);
    entry2_8.addEventListener("change", updateTotal);
    entry2_9.addEventListener("change", updateTotal);
    entry2_10.addEventListener("change", updateTotal);
    entry2_11.addEventListener("change", updateTotal);
    entry2_12.addEventListener("change", updateTotal);
    entry2_13.addEventListener("change", updateTotal);
    entry2_14.addEventListener("change", updateTotal);
    ub2.addEventListener("DOMSubtreeModified", updateTotal); // Listen for changes in ub1's content

    // Initial calculation
    updateTotal();
});
