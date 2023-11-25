
        const passwordBox = document.getElementById("password")
        let length = 12

        const alphabetsHigher = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const alphabetsLower = "abcdefghijklmnopqrstuvwxyxz"
        const numbers = "0123456789"
        const symbols = "~!@#$%^&*()_+/*\-"

        const allchars = alphabetsHigher+alphabetsLower+numbers+symbols

        function Gpassword(){
            let password = ""
            password += alphabetsHigher[Math.floor(Math.random()*alphabetsHigher.length)]
            password += alphabetsLower[Math.floor(Math.random()*alphabetsLower.length)]
            password += numbers[Math.floor(Math.random()*numbers.length)]
            password += symbols[Math.floor(Math.random()*symbols.length)]

            while(length > password.length){
                password += allchars[Math.floor(Math.random()*allchars.length)]
            }

            passwordBox.value = password
        }

        function CopyPassword(){
            passwordBox.select()
            document.execCommand('copy')
        }

        