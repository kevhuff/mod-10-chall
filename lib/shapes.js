class Shape {
    constructor() {
      this.color = '';
      this.text = '';
      this.textColor = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    setText(text) {
      this.text = text;
    }
  
    setTextColor(textColor) {
      this.textColor = textColor;
    }
  
    render() {
      throw new Error('The render() method must be implemented in the child class.');
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return '<polygon points="150, 20 280, 180 20, 180" ' +
        `fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return '<rect x="50" y="50" width="200" height="100" ' +
        `fill="${this.color}" />`;
    }
  }
  
  module.exports = {
    Shape,
    Circle,
    Triangle,
    Square,
  };
  