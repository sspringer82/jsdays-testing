

        Component         <= 1. mock für ServicA + ServiceB

ServiceA        ServiceB  <= 2. mock für fetch als Depdency

fetch                     <= 3. fetch-mock




ServiceA = {
  fetchUsers() {

  }
}

SeviceA.fetchUsers = [{id: 1, username: 'Klaus'}];