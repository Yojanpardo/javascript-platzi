console.info("bienvenido a piedra papel o tijera. ");
console.info("debes tener en cuenta lo siguiente");
console.info("1. las opciones son las siguientes: 0 = piedra, 1 = papel, 2 = tijera");
console.info("2. para poder jugar debes llamar la función play con el numero de la opción que quieres, por ejemplo asi: play(1)");
console.info("3. la máquina seleccionará una opción de manera aleatoria y obtendrás el resultado de la batalla en la consola");
console.info("4. diviértete!");

const options = ["piedra", "papel", "tijera"]

const youLost = () => {
    console.error("");
    console.error("                  (              )");
    console.error("(            (    )\\          ( /(");
    console.error(")\\ )   (    ))\\  ((_) (   (   )\\())");
    console.error("(()/(   )\\  /((_)  _   )\\  )\\ (_))/");
    console.error(")(_)) ((_)(_))(  | | ((_)((_)| |_");
    console.error("| || |/ _ \\| || | | |/ _ \\(_-<|  _|");
    console.error("\\_, |\\___/ \\_,_| |_|\\___//__/ \\__|");
    console.error("|__/");
}

const draw = () => {
    console.warn(" .----------------.  .----------------.  .----------------.  .----------------. ");
    console.warn("| .--------------. || .--------------. || .--------------. || .--------------. |");
    console.warn("| |  ________    | || |  _______     | || |      __      | || | _____  _____ | |");
    console.warn("| | |_   ___ `.  | || | |_   __ \\    | || |     /  \\     | || ||_   _||_   _|| |");
    console.warn("| |   | |   `. \\ | || |   | |__) |   | || |    / /\\ \\    | || |  | | /\\ | |  | |");
    console.warn("| |   | |    | | | || |   |  __ /    | || |   / ____ \\   | || |  | |/  \\| |  | |");
    console.warn("| |  _| |___.' / | || |  _| |  \\ \\_  | || | _/ /    \\ \\_ | || |  |   /\\   |  | |");
    console.warn("| | |________.'  | || | |____| |___| | || ||____|  |____|| || |  |__/  \\__|  | |");
    console.warn("| |              | || |              | || |              | || |              | |");
    console.warn("| '--------------' || '--------------' || '--------------' || '--------------' |");
    console.warn(" '----------------'  '----------------'  '----------------'  '----------------' ");
}

const youWin = () => {
    console.info(""                                                                                        );
    console.info("8b       d8   ,adPPYba,   88       88     8b      db      d8   ,adPPYba,   8b,dPPYba,   ");
    console.info("`8b     d8'  a8\"     \"8a  88       88     `8b    d88b    d8'  a8\"     \"8a  88P'   `\"8a  ");
    console.info(" `8b   d8'   8b       d8  88       88      `8b  d8'`8b  d8'   8b       d8  88       88  ");
    console.info("  `8b,d8'    \"8a,   ,a8\"  \"8a,   ,a88       `8bd8'  `8bd8'    \"8a,   ,a8\"  88       88  ");
    console.info("    Y88'      `\"YbbdP\"'    `\"YbbdP'Y8         YP      YP       `\"YbbdP\"'   88       88  ");
    console.info("    d8'                                                                                 ");
    console.info("   d8'");
}

const validateWinner = (userOption, machineOption) => {
    console.info(`your selection is [${userOption}] and machine selection is [${machineOption}]`);
    if(userOption != machineOption) {
        if((userOption === "piedra" && machineOption === "tijera")
        || (userOption === "tijera" && machineOption === "papel")
        || (userOption === "papel"  && machineOption === "piedra")){
            youWin();
        } else {
            youLost();
        }
    } else {
        draw();
    }
}

const selectMachineOption = () => {
    return options[Math.floor(Math.random()*3)];
}

const play = (userOption) => {
    validateWinner(options[Number(userOption)], selectMachineOption());
}

play(1);