## Bugs from `saucedemo` app

**Name:** Incorrect product images  
**Description:** User *problem_user* sees incorrect product images on the inventory page  
**Priority**: P3  
**Severity**: Medium  

**Steps to reproduce:**  
1. Open https://www.saucedemo.com/
2. Enter *problem_user* in the Username field
3. Enter *secret_sauce* in the Password field
4. Click on the **Login** button
5. Redirect on inventory page https://www.saucedemo.com/inventory.html
6. Look at the images  

**Expected result**  
- Successful login, the inventory page displays pictures of items corresponding to the item name (for example, like *"standard_user"*)  

**Actual result**  
- Successful login, inventory page has incorrect images for each items  

**Browser/ Software version**  
- OS: Windows 10  
- Browsers:  
  - Google Chrome v136.0.7103.93  
  - Microsoft Edge v136.0.3240.50  
  - Firefox v138.0.1  
  
**Tag**: #UI, #Visual_defect  
  
---  
  
**Name:**  Invalid values ​​for fields: *First Name, Last Name* for order  
**Description:** When placing an order and filling in the fields:*First Name, Last Name*, you can enter numbers in these fields  
**Priority**: P1  
**Severity**: High  

**Steps to reproduce:**  
1. Open https://www.saucedemo.com/
2. Enter *standard_user* in the Username field
3. Enter *secret_sauce* in the Password field
4. Click on the **Login** button
5. Redirect on inventory page https://www.saucedemo.com/inventory.html
6. Add any item in a cart
7. Go to the cart and click on the **Checkout** button
8. Fill in fields *First Name, Last Name* with numbers  
9. Click on the **Continue** button  

**Expected result**  
- Forbidden to enter numbers in these fields  

**Actual result**  
- Proceed to the next step to complete the order  

**Browser/ Software version**  
- OS: Windows 10  
- Browsers:  
  - Google Chrome v136.0.7103.93  
  - Microsoft Edge v136.0.3240.50  
  - Firefox v138.0.1  

**Tag**: #Input_Validation  

---
  
**Name:** Fields *First Name, Last Name, Zip/Postal Code* have no character limit  
**Description:** When placing an order and filling in the fields: *First Name, Last Name, Zip/Postal Code*, you can enter characters without restrictions  
**Priority**: P1  
**Severity**: High  

**Steps to reproduce:**
1. Open https://www.saucedemo.com/
2. Enter *standard_user* in the Username field
3. Enter *secret_sauce* in the Password field
4. Click on the **Login** button
5. Redirect on inventory page https://www.saucedemo.com/inventory.html
6. Add any item in a cart
7. Go to the cart and click on the **Checkout** button
8. Enter characters at fields *First Name, Last Name, Zip/Postal Code*
9. Click on the **Continue** button

**Expected result**  
- Error message "Character limit exceeded"  

**Actual result**  
- There is no error message or prompt to indicate that the input is invalid

**Browser/ Software version**  
- OS: Windows 10  
- Browsers:  
  - Google Chrome v136.0.7103.93  
  - Microsoft Edge v136.0.3240.50  
  - Firefox v138.0.1  

**Tag**: #Input_Validation  
