      function Car(brand, model, kind, paintjob) {
        this.brand = brand;
        this.model = model;
        this.kind = kind;
        this.paintjob = paintjob;
        this.description = function () {
          return "Your car's brand is " + this.brand + "  " +this.model + " and a " + this.kind;
        }
      }
       
       var VinCar = new Car("BMW", "X5M", "truck", "black");
       var KatieCar = new Car("Mercedes", "SL550", "sedan", "silver");


        Car.prototype.upgrades = false;


       function Customized() {
        console.log(this)
        console.log(arguments)
  
         /* Must add next line for Car.prototype.upgrades = false to be applied to Car */
        Car.apply(this, arguments) 
        this.upgrades = true;
      }

        Customized.prototype = new Car();

        JonCar = new Customized("Nissan", "GTR", "SportsSedan", "Red");