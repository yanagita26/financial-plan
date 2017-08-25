export class Relationship {
  private keyValue = [
    { key: 0, value: '夫' },
    { key: 1, value: '妻' },
    { key: 2, value: '子' },
    { key: 9, value: '親' }
  ];

  get() {
    return this.keyValue;
  }

  value(key: number): string {
    return this.keyValue.filter(
      (value, index) => (value.key === Number(key)) ? this.keyValue[index] : ''
    )[0].value;
  }
}
