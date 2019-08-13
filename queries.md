# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
```
SELECT ProductName, CategoryName FROM Products
JOIN Categories 
ON Products.CategoryID = Categories.CategoryID
```

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
```
SELECT Orders.orderid, Shippers.shippername FROM Orders 
JOIN Shippers on Orders.shipperID = Shippers.shipperID 
WHERE Orders.orderdate < '1997-01-09'
```

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
```
SELECT Products.productname, OrderDetails.quantity FROM PRODUCTS 
JOIN OrderDetails
ON OrderDetails.productid = Products.productid 
WHERE OrderDetails.orderid = 10251
```

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
```
SELECT Orders.OrderID, Customers.CustomerID, Employees.LastName from ORDERS  
JOIN Customers 
ON Orders.customerID = Customers.customerID 
JOIN Employees ON Orders.EmployeeID = Employees.employeeID
```

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.
```
SELECT Categories.CategoryName, count(Categories.CategoryName) as Count 
FROM Categories 
LEFT JOIN Products 
ON Categories.CategoryID = Products.CategoryID 
GROUP BY Categories.CategoryName
```

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 
```
SELECT OrderDetails.OrderID, sum(Quantity) as ItemCount FROM OrderDetails 
JOIN Products 
ON Products.ProductID = OrderDetails.ProductID 
GROUP BY OrderID;
```

