(function(){
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var itemToBuy = this;
  itemToBuy.toBuyitems=ShoppingListCheckOffService.getToBuyItems();
  itemToBuy.buyItem=function(itemIndex){
    ShoppingListCheckOffService.buy(itemIndex)
  }
}

AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var itemAlreadyBought=this;
  itemAlreadyBought.boughtItems=ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService(){
  var toBuyItems = [{quantity:10,name:"Cookies"},{quantity:3,name:"Burger"},{quantity:5,name:"Plain Water"}];
  var boughtItems = [];
  var service= this;
  service.getToBuyItems = function () {

    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
  service.buy = function(itemIndex){
    var item= toBuyItems.splice(itemIndex,1)[0];
    boughtItems.push(item);
  }
}
})();
