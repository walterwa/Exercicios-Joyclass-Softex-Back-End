//interface antiga

function Shipping() {
    this.request = function(zipStart, zipEnd, weight) {
        //...
        return "$49.75";
    }
}

//nova interface

function AdvancedShipping() {
    this.login = function(credentials) { /*...*/};
    this.setStart = function(start) { /*...*/};
    this.setDestination = function(destination) { /*...*/};
    this.calculate = function(weight) { return "$39.50";};
}

//adaptador de interface (Adapter Interface)
function ShippingAdapter(credentials) {
    var shipping = new AdvancedShipping();

    shipping.login(credentials);

    return {
        request: function(zipStart, zipEnd, weight) {
            shipping.setStart(zipStart);
            shipping.setDestination(zipEnd);
            return shipping.calculate(weight);
        }
    };
}
function run() {
    var shipping = new Shipping();
    var credentials = { token: "30a8-6ee1"};
    var adapter = new ShippingAdapter(credentials);

    //interface original de envio de objeto (shipping)

    var cost = shipping.request("78701", "10010", "2 kgs");
    console.log("Old cost: " + cost);

    //new shipping object with adapter interface

    cost = adapter.request("78701", "10010", "2 lbs");

    console.log("New Cost: " + cost);

}
run()