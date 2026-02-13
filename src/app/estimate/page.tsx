import { Metadata } from 'next';
import EstimatorForm from '@/components/forms/EstimatorForm';

export const metadata: Metadata = {
  title: 'Free Project Estimator | SolidGround Concrete Solutions',
  description: 'Get an instant estimate for your concrete project. Choose your service type, enter dimensions, and receive a detailed quote with no obligation.',
};

export default function EstimatePage() {
  return (
    <main>
      <EstimatorForm />
    </main>
  );
}