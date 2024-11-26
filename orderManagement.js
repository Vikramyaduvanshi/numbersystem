
let orders = [
    "1001: John Doe",
    "1002: Alice Smith",
    "1003: Bob Johnson",
    "1004: Charlie Brown",
    "1005: Emily Davis"
  ];
  
  
  let newOrders = [
    "1006: Sophia Taylor",
    "1007: Michael Scott",
    "1008: Olivia Martinez"
  ];
  
  for (let i = newOrders.length - 1; i >= 0; i--) {
    orders.unshift(newOrders[i]);
  }
  
  orders.pop();
  orders.pop();
  

  function processOrders(queue) {
    for (let order of queue) {
      let separatorIndex = order.indexOf(":");
      let orderID = order.slice(0, separatorIndex).trim();
      let customerName = order.slice(separatorIndex + 1).trim();
      console.log(`Processing ${orderID} for ${customerName}`);
    }
  }
  
  processOrders(orders);
  

  console.log("Final Queue:", orders);
  
 
  function findLongestName(queue) {
    let longestName = "";
    for (let order of queue) {
      let separatorIndex = order.indexOf(":");
      let customerName = order.slice(separatorIndex + 1).trim();
      if (customerName.length > longestName.length) {
        longestName = customerName;
      }
    }
    console.log(`Customer with the longest name is: ${longestName}`);
  }
  
  findLongestName(orders);
  