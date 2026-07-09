const phone = {
  battery: 13,
  needCharging() {
    return this.battery < 20;
  },
};

console.log(phone.needCharging());
