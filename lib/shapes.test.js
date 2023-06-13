const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
  it('should render a circle SVG string with the assigned color', () => {
    const circle = new Circle();
    circle.setColor('blue');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
  });
});

describe('Triangle', () => {
  it('should render a triangle SVG string with the assigned color', () => {
    const triangle = new Triangle();
    triangle.setColor('green');
    expect(triangle.render()).toEqual('<polygon points="150, 20 280, 180 20, 180" fill="green" />');
  });
});

describe('Square', () => {
  it('should render a square SVG string with the assigned color', () => {
    const square = new Square();
    square.setColor('#FF0000');
    expect(square.render()).toEqual('<rect x="50" y="50" width="200" height="100" fill="#FF0000" />');
  });
});
