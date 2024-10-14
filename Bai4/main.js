function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email));
  }
  
  const email = "tranvantruong@gmail.com";
  if (validateEmail(email)) {
    console.log("Địa chỉ email hợp lệ.");
  } else {
    console.log("Địa chỉ email không hợp lệ.");
  }
  