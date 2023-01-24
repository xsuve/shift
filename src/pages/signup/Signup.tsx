import React from 'react';
import Logo from '@components/logo/Logo';
import Text from '@components/ui/text/Text';
import Title from '@components/ui/title/Title';
import Button from '@components/ui/button/Button';
import { Link } from 'react-router-dom';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import Caption from '@components/ui/caption/Caption';
import Input from '@components/ui/input/Input';

const Signup: React.FC = () => {
  return (
    <div className='flex h-screen'>
      <div className='h-full w-2/5 lg:w-1/4 flex flex-col justify-between items-center bg-white p-20'>
        <Link to='/'>
          <Logo size='lg' />
        </Link>
        <div className='w-full text-center'>
          <Title size='lg' className='mb-5'>Înregistrează-te în Shift</Title>
          <Text>Întrodu email-ul și parola ta pentru a te înregistra.</Text>
        </div>
        <div className='w-full text-center flex flex-col gap-y-10'>
          <Input
            type='email'
            name='email'
            placeholder='Email'
            label='Adresa de email'
          />
          <Input
            type='password'
            name='password'
            placeholder='Parolă'
            label='Parola'
          />
          <Input
            type='password'
            name='confirm_password'
            placeholder='Confirmă parola'
            label='Confirmare parolă'
          />
        </div>
        <div className='w-full text-center'>
          <Button type='submit' color='royal-blue' rightArrow={<ArrowLongRightIcon />} className='w-full'>Continuă</Button>
          <div className='mt-5'>
            <Caption>Ai deja un cont? </Caption>
            <Link to='/login'>
              <Caption color='dark-navy' weight='medium'>Autentifică-te</Caption>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;