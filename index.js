const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

function promptUser() {
  return inquirer.prompt([
    {
      name: 'text',
      message: 'Enter up to three characters for the logo text:',
      validate: (input) => input.length > 0 && input.length <= 3,
    },
    {
      name: 'textColor',
      message: 'Enter a color keyword or a hexadecimal number for the text color:',
      validate: (input) => /^#[0-9A-Fa-f]{6}$|^[a-zA-Z]+$/.test(input),
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      name: 'shapeColor',
      message: 'Enter a color keyword or a hexadecimal number for the shape color:',
      validate: (input) => /^#[0-9A-Fa-f]{6}$|^[a-zA-Z]+$/.test(input),
    },
  ]);
}

function createShape(shapeType, shapeColor, text, textColor) {
  let shape;
  switch (shapeType) {
    case 'circle':
      shape = new Circle();
      break;
    case 'triangle':
      shape = new Triangle();
      break;
    case 'square':
      shape = new Square();
      break;
    default:
      throw new Error('Invalid shape type');
  }

  shape.setColor(shapeColor);
  shape.setText(text);
  shape.setTextColor(textColor);

  return shape;
}

function generateSVG(shape, text) {
  const shapeSVG = shape.render();
  const textSVG = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">${text}</text>`;

  return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapeSVG}${textSVG}</svg>`;
}

async function main() {
  try {
    const userInput = await promptUser();
    const { text, textColor, shape, shapeColor } = userInput;

    const shapeInstance = createShape(shape, shapeColor, text, textColor);
    const svgString = generateSVG(shapeInstance, text);

    fs.writeFileSync('logo.svg', svgString);
    console.log('Generated logo.svg');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
