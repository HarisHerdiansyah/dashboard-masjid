import * as React from 'react';
import { Eye, EyeOff } from 'lucide-react';

import { Button } from './button';
import { Input } from './input';
import { cn } from '../../lib/utils';

type PasswordInputProps = React.ComponentProps<typeof Input> & {
  defaultVisible?: boolean;
};

function PasswordInput({
  className,
  defaultVisible = false,
  disabled,
  ...props
}: PasswordInputProps) {
  const [isVisible, setIsVisible] = React.useState(defaultVisible);

  return (
    <div className='flex h-9 w-full items-center rounded-4xl border border-input bg-input/30 transition-colors focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50 has-disabled:cursor-not-allowed has-disabled:opacity-50'>
      <Input
        {...props}
        className={cn(
          'h-full flex-1 rounded-none border-0 bg-transparent px-3 py-1 focus-visible:border-0 focus-visible:ring-0',
          className
        )}
        disabled={disabled}
        type={isVisible ? 'text' : 'password'}
      />
      <Button
        aria-label={
          isVisible ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'
        }
        className='mr-1 text-muted-foreground hover:text-foreground'
        disabled={disabled}
        onClick={() => setIsVisible((visible) => !visible)}
        size='icon-sm'
        type='button'
        variant='ghost'
      >
        {isVisible ? <EyeOff /> : <Eye />}
      </Button>
    </div>
  );
}

export { PasswordInput };
