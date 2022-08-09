let std1 = new Student("Saroar Hossain", "Shahan", 25, 99, "B");
    console.log(std1);

    function convertToInteger(input) {
            let result = Number.parseInt(input);
            if (!result) {
                return "This data can't be converted to integer."
            } else {
                return result;
            }
        }
        let result = convertToInteger('25');
        console.log(result);                   // 25
        result = convertToInteger('String');
        console.log(result); 