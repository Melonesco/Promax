import Gucci from '../../images/t-shirts/gucci.jpeg';
import Gucci2 from '../../images/t-shirts/gucci2.jpeg';
import Gucci3 from '../../images/t-shirts/gucci3.jpeg';
import Gucci4 from '../../images/t-shirts/gucci4.jpeg';
import Gucci5 from '../../images/t-shirts/gucci5.jpeg';
import Dark3d from '../../images/t-shirts/Dark3d.jpg';
import Printer3d from '../../images/t-shirts/printer-3d.jpg';
import Printer3d2 from '../../images/t-shirts/Printer3d.jpg';
import ShortsImg from '../../images/shorts/shorts.jpeg';
import Puma from '../../images/shorts/Puma.jpeg';
import HipHop1 from '../../images/cap/hipHop1.jpeg';
import HipHop2 from '../../images/cap/hipHop2.jpeg';
import HipHop3 from '../../images/cap/hipHop3.jpeg';
import HipHop4 from '../../images/cap/hipHop4.jpeg';
import Sum2 from '../../images/cap/sum2.jpeg';
import Sum3 from '../../images/cap/sum3.jpeg';
import Nike1 from '../../images/shorts/nike1.jpeg';
import Nike2 from '../../images/shorts/nike2.jpeg';
import Nike3 from '../../images/shorts/nike3.jpeg';
import Nike4 from '../../images/shorts/nike4.jpeg';
import La1 from '../../images/cap/la1.jpeg';
import La2 from '../../images/cap/la2.jpeg';
import La3 from '../../images/cap/la3.jpeg';
import Print3d from '../../images/t-shirts/Print3d.jpg';
import IceCream from '../../images/t-shirts/iceCreem.jpg';

const Products = [
  {
    id: 1,
    type: 'T-shirts',
    name: 'Gucci t-shirt',
    price: 15000,
    colors: ['red', 'green', 'white', 'black'],
    images: [Gucci, Gucci2, Gucci3, Gucci4, Gucci5],
    info: 'Good quality men\'s t-shirt',
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL']
  },
  {
    id: 2,
    type: 'T-shirts',
    name: 'Dark t-shirt',
    price: 7000,
    colors: ['red', 'green', 'white', 'black'],
    images: [Dark3d],
    info: 'Good quality men\'s t-shirt',
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 3,
    type: 'Shorts',
    name: 'White Shorts',
    price: 2500,
    colors: ['red', 'green', 'white', 'black'],
    images: [ShortsImg],
    info: 'Good quality men\'s shorts',
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL']
  },
  {
    id: 4,
    type: 'Shorts',
    name: 'Puma shorts',
    price: 3200,
    colors: ['red', 'green', 'white', 'black'],
    images: [Puma],
    info: 'Good quality men\'s shorts',
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL']
  },
  {
    id: 5,
    type: 'Caps',
    name: 'Hip Hop cap',
    price: 800,
    colors: ['red', 'green', 'white', 'black'],
    images: [HipHop1, HipHop2, HipHop3, HipHop4],
    info: 'Good quality men\'s cap',
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL']
  },
  {
    id: 6,
    type: 'T-shirts',
    name: 'Printer 3D t-shirt',
    price: 500,
    colors: ['red', 'green', 'white', 'black'],
    images: [Printer3d2],
    info: 'Good quality men\'s t-shirt',
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL']
  },
  {
    id: 7,
    type: 'Caps',
    name: 'Summer cap',
    price: 1000,
    colors: ['red', 'green', 'white', 'black'],
    images: [Sum2, Sum3],
    info: 'Good quality men\'s cap',
    sizes: ['M', 'L', 'XL', '2XL', '3XL']
  },
  {
    id: 8,
    type: 'T-shirts',
    name: '3D t-shirt printer',
    price: 500,
    colors: ['red', 'green', 'white', 'black'],
    images: [Printer3d],
    info: 'Good quality men\'s t-shirt',
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL']
  },
  {
    id: 9,
    type: 'Shorts',
    name: 'Nike shorts',
    price: 2200,
    colors: ['red', 'green', 'white', 'black'],
    images: [Nike1, Nike2, Nike3, Nike4],
    info: 'Good quality men\'s shorts',
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 10,
    type: 'Caps',
    name: 'La cap',
    price: 1500,
    colors: ['red', 'green', 'white', 'black'],
    images: [La1, La2, La3],
    info: 'Good quality men\'s cap',
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 11,
    type: 'T-shirts',
    name: '3D t-shirt printer',
    price: 500,
    colors: ['red', 'green', 'white', 'black'],
    images: [Print3d],
    info: 'Good quality men\'s t-shirt',
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL']
  },
  {
    id: 12,
    type: 'T-shirts',
    name: '3D t-shirt printer',
    price: 500,
    colors: ['red', 'green', 'white', 'black'],
    images: [IceCream],
    info: 'Good quality men\'s t-shirt',
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL']
  }
];

export default Products;
