//BUDGET CONTROLLER


var budgetController = (function(){

    //some code
})();



//UI CONTROLLER

var UIController = (function(){
    
    
    var DOMStrings ={
        
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value'
        
    };
    
return {
    
  getinput: function(){
      
      
      return {
          
          
            type : document.querySelector(DOMStrings.inputType).value,  //will be either inc or exp
            description : document.querySelector(DOMStrings.inputDescription).value,
            value : document.querySelector(DOMStrings.inputValue).value
      };
  },
    
    getDOMStrings: function(){
        
        
        return DOMStrings;
        
    }
    
    
};
    
    
})();


//GLOBAL APP CONTROLLER

var controller = (function(budgetCtrl, UICtrl){
    
    
    var setupEventListeners = function(){
        
        
        
    var DOM = UICtrl.getDOMStrings();
            
    document.querySelector(DOM.inputType).addEventListener('click', ctrlAddItem);
    
    document.addEventListener('keypress', function(event){
        
        if(event.keyCode===13||event.which===13){
      
            ctrlAddItem();
            
        }
            
        
        
    });
        
    };
    
    
    
    
    
    
    var ctrlAddItem = function(){
              
        
        //1. get the field input data
        
        
        var input = UICtrl.getinput();
        console.log(input);
        
        
        
        //2. add the item to the budget controller
        //3. add the item to ui
        //4. calculate the budget
        //5. display the budget
 
        
    };
    
    
    return {
        
        
        
        
    }

    

    
    
    
})(budgetController, UIController);




























