
console.log("Inicio!")
let a = document.getElementsByClassName("casilla");
let res = document.querySelector("#res");

const juego = ["0", "0", "0", 
                "0", "0", "0",
                "0", "0", "0"];

let cont = 0; 
let stat = 1;
//1 --> X
//2 --> O
let k = ""
let ti = document.getElementById("titulo");
let p = document.getElementById("aaa");
let winner = "X";

for (let i = 0; i < Object.values(a).length; i++) 
{
    Object.values(a)[i].addEventListener("click", function (e)
    {
        if(Object.values(a)[i].innerHTML != "")
        {
            p.innerHTML = "Escoger una casilla vacía!";
        }
        else
        {
            p.innerHTML = "...";
            switch (stat) {
                case 1:
                    juego[i] = "X";
                    console.log("--> X")
                    Object.values(a)[i].innerHTML = "X";
                    stat = 2;   
                    break;
            
                case 2:
                    juego[i] = "O";
                    console.log("--> O")
                    Object.values(a)[i].innerHTML = "O";
                    stat = 1;
                    break;
            }
            cont++;
            winner = Object.values(a)[i].innerHTML
            if(juego[0] == winner)
            {   
                if(juego[1] == winner)
                {
                    if(juego[2] == winner)
                    {
                        console.log(1);
                        k = 9;
                        ti.innerHTML = "Ganador es " + winner;
                    }   
                }
                if(juego[4] == winner)
                {
                    if(juego[8] == winner)
                    {
                        console.log(2);
                        k = 9;
                        ti.innerHTML = "Ganador es " + winner;
                    }
                }
                if(juego[3] == winner)
                {
                    if(juego[6] == winner)
                    {
                        console.log(3);
                        k = 9;
                        winner = Object.values(a)[i].innerHTML;
                        ti.innerHTML = "Ganador es " + winner;
                    }
                }
            }
            if(juego[3] == winner)
            {
                if(juego[4] == winner)
                {
                    if(juego[5] == winner)
                    {
                        console.log(4);
                        k = 9;
                        ti.innerHTML = "Ganador es " + winner;
                    }
                }   
            }
            if(juego[6] == winner)
            {
                if(juego[7] == winner)
                {
                    if(juego[8] == winner)
                    {
                        console.log(5);
                        k = 9;
                        ti.innerHTML = "Ganador es " + winner;
                    }
                }   
            }
            if(juego[2] == winner)
            {
                if(juego[4] == winner)
                {
                    if(juego[6] == winner)
                    {
                        console.log(6);
                        k = 9;
                        ti.innerHTML = "Ganador es " + winner;
                    }
                }  
                if(juego[5] == winner)
                {
                    if(juego[8] == winner)
                    {
                        console.log(7);
                        k = 9;
                        ti.innerHTML = "Ganador es " + winner;
                    }
                } 
            }
            if(juego[1] == winner)
            {
                if(juego[4] == winner)
                {
                    if(juego[7] == winner)
                    {
                        console.log(8);
                        k = 9;
                        ti.innerHTML = "Ganador es " + winner;
                    }   
                }    
            }
        }
        if(k == 9)
        {
            res.innerHTML = "Press me!";
            for (let j = 0; j < juego.length; j++) 
            {
                Object.values(a)[j].disabled = true;
                k = 0;
            };
        }
        if(cont == 9)
        {
            ti.innerHTML = "Empate"
            res.innerHTML = "Press me!";
            for (let j = 0; j < juego.length; j++) 
            {
                Object.values(a)[j].disabled = true;
            };
            k = 0;
            cont = 0;
        }
        console.log("click")
        //console.log(stat)
        console.log(juego)

    }
    )
}

res.addEventListener("click", function reset(e)
    {
        for (let i = 0; i < juego.length; i++) 
        {
            Object.values(a)[i].disabled = false;
            juego[i] = 0;
            a[i].innerHTML = "";
        };
        res.innerHTML = "Reset!";
        ti.innerHTML = "Tres en raya!"
        cont = 0;
        console.log("Reset!")
    }
)