import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { BrowserRouter } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Product } from '../types/Product';
import { Route } from 'react-router-dom';

const exampleProduct: Product = {
  id: 15,
  title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
  price: 56.99,
  description:
    "Abrigo 3 en 1 con forro térmico desmontable, ideal para invierno. Diseño cómodo, ajustable y con bolsillos seguros.",
  category: "women's clothing",
  image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
  condition: "new",
  seller: {
    nickname: "TiendaOficialCol",
  },
  sold_quantity: 'test',
};

const meta = {
  title: 'Components/ProductCard',
  component: ProductCard,
  decorators: [
    (Story) => (
      <BrowserRouter>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </BrowserRouter>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    product: { control: 'object' },
    key: { control: 'number' },
  },
  args: {
    key: 1,
    product: exampleProduct,
  },
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    product: exampleProduct,
  },
};

