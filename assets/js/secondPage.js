
    const addresses = [];

    function addAddress() {
      const fullInput = document.getElementById('fullInput').value;
      const fullName = document.getElementById('fullNameInput').value;
      const phoneNumber = document.getElementById('phoneNumberInput').value;
      const address = document.getElementById('addressInput').value;

      if (fullInput && fullName && phoneNumber && address) {
        const newAddress = {
          fullName,
          phoneNumber,
          address,
        };

        addresses.push(newAddress);

        document.getElementById('fullInput').value = '';
        document.getElementById('fullNameInput').value = '';
        document.getElementById('phoneNumberInput').value = '';
        document.getElementById('addressInput').value = '';

        displayAddresses();
      } else {
        alert('Silakan isi semua kolom');
      }
    }

    function displayAddresses() {
      const addressList = document.getElementById('addressList');
      addressList.innerHTML = '';

      addresses.forEach((address) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${address.fullInput} - ${address.fullName} - ${address.phoneNumber} - ${address.address}`;
        addressList.appendChild(listItem);
      });
    }
  