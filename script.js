//all we could do with es5 and es6 is:

        // Destructuring

      const person = {
              firstName : "Abdullah",
              lastName  : "Çok",
              age       : 25,
              eyeColor  : "brown",
              city: "Eskişehir"
      };

      const { firstName, lastName, age, eyeColor, city} = person;


      // Object properties

      const a = 'es7';
      const b = true;
      const c = 396080;

      const okObj = {a, b, c};


      // Template strings

      const message = `Hello ${firstName}! Have I met you before? I think we met in ${city}. Lst summer? ---No?`;


      //class
      class basketball_players{
            construcror(name, position, ability){
                  this.name = name;
                  this.position = position;
                  this.ability = ability;
            }
      }

      class guards extends basketball_players{
              construcror(name, position, skill){
                    guards(name, position, skill)
              }
                    plays(){
                          console.log(`Hi! I'm ${this.name} and my position is ${this.position}, also hugest thing I can do is ${this.skill} `);
                    }
      }

      const vic = new guards('Victor Oladipo', 'Shooting Guard, also play for PG', 'Defence, Dribbling, Scoring');


      // ES7 presents us:

        .includes(); //you can see in console with: --- 'hello'.includes('o'); ---- then you can see it's true

        const(e_objects) = ['laptop', 'tablet', 'phone', 'headphones'];
        e_objects.includes('laptop');
        e_objects.filter(o => o.includes('table')); //this shows us tablet..


        //ES8 also shows how to do:

        Object.values
        Object.entries
        Object.keys

        let society = {
            username0: 'steph',
            username1: 'kyrie',
            username2: 'vic'
        }

        Object.keys(society).forEach((key, index) =>{
              console.log(key, society[key]);
        })

        /*** output is:  username0 Steph
                              username1 Kyrie
                              username2 Victor   ***/


        Object.values(society).forEach(name =>{
              console.log(name);
        })

        /*** output is:  Steph
                                    Kyrie
                                    Victor   ***/

        Object.entries(society).forEach(name =>{
              console.log(name);
        })

        /*** output is:
         ["username0", "Steph"]
         ["username1", "Kyrie"]
         ["username2", "Victor"]
        ***/

        Objects.entries(society).map(value => {
            return value[1] + value[0].raplace('username', '');
        })

        /*** output is:
          ["Steph0", "Kyrie1", "Vic2"]
        ***/
