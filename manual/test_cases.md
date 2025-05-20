## Test Cases for `saucedemo` app

**ID:** TC_UI_01  
**Title:** Successful login  
**Priority:** P0  
**Preconditions:**  
- Browser is open
- User is on the login page at `https://www.saucedemo.com/`  

**Test Steps:**
1. Enter *standard_user* in the Username field
2. Enter *secret_sauce* in the Password field
3. Click on the **Login** button

**Expected Result:**
- User is redirected to the inventory page: `https://www.saucedemo.com/inventory.html`  

---

**ID:** TC_UI_02  
**Title:** User cannot login without credentials  
**Priority:** P1  
**Preconditions:**  
- Browser is open
- User is on the login page at `https://www.saucedemo.com/` 

**Test Steps:**
1. The Username field is empty
2. The Password field is empty
3. Click on the **Login** button

**Expected Result:**
- User stayed on page: `https://www.saucedemo.com/`
- Error message *"Epic sadface: Username is required"* is displayed  

---

**ID:** TC_UI_03  
**Title:** User cannot login without username  
**Priority:** P2    
**Preconditions:**  
- Browser is open
- User is on the login page at `https://www.saucedemo.com/` 

**Test Steps:**
1. The Username field is empty
2. Enter *secret_sauce* in the Password field
3. Click on the **Login** button

**Expected Result:**
- User stayed on page: `https://www.saucedemo.com/`
- Error message *"Epic sadface: Username is required"* is displayed

---

**ID:** TC_UI_04  
**Title:** User cannot login without password  
**Priority:** P2    
**Preconditions:**  
- Browser is open
- User is on the login page at `https://www.saucedemo.com/` 

**Test Steps:**
1. Enter *standard_user* in the Username field
2. The Password field is empty
3. Click on the **Login** button

**Expected Result:**
- User stayed on page: `https://www.saucedemo.com/`
- Error message *"Epic sadface: Password is required"* is displayed

---

**ID:** TC_UI_05  
**Title:** Blocked user cannot login  
**Priority:** P1    
**Preconditions:**  
- Browser is open
- User is on the login page at `https://www.saucedemo.com/` 

**Test Steps:**
1. Enter *locked_out_user* in the Username field
2. Enter *secret_sauce* in the Password field
3. Click on the **Login** button

**Expected Result:**
- User stayed on page: `https://www.saucedemo.com/`
- Error message *"Epic sadface: Sorry, this user has been locked out."* is displayed

---

**ID:** TC_UI_06  
**Title:**  User can add item at the cart  
**Priority:** P0    
**Preconditions:**  
- Browser is open
- User [Username: *standard_user* ; password: *secret_sauce*] is on the inventory page `https://www.saucedemo.com/inventory.html` 

**Test Steps:**
1. Click on the **Add to cart** button

**Expected Result:**
- The cart icon has an icon with the number of items  
- The **Add to cart** button changed to *"Remove"*  