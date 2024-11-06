import React from 'react';
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogTitle, Button } from '@/components/ui';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import { EventLocationSearch } from './index';
import { X } from 'lucide-react';
import Container from '@/components/common/container';

interface IEventLocationSearchDialogProps {
  open: boolean;
  onOpenChange: (state: boolean) => void;
}

function EventLocationSearchDialog({ open, onOpenChange }: IEventLocationSearchDialogProps) {
  return (
    <AlertDialogPrimitive.AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogPrimitive.Portal>
        <Button
          onClick={() => onOpenChange(false)}
          variant="menu"
          size="md"
          className="fixed right-7 top-7 z-[60] inline-grid size-12 place-items-center rounded-full bg-[#1E1E1E61] lg:right-16 lg:top-14"
        >
          <X className="size-8" />
        </Button>

        <AlertDialogPrimitive.Overlay className="fixed inset-0 z-50 grid h-screen w-screen overflow-y-auto bg-[#1E1E1E7A] py-20 backdrop-blur-bg">
          {/* <AlertDialogPrimitive.Content className="w-full">
            <AlertDialogPrimitive.Title className="sr-only">Event Location search</AlertDialogPrimitive.Title>
            <AlertDialogPrimitive.Cancel asChild> */}

          {/* </AlertDialogPrimitive.Cancel> */}

          <Container className="m-auto flex w-full items-center justify-center">
            <EventLocationSearch className="m-auto w-full" />
          </Container>
          {/* </AlertDialogPrimitive.Content> */}
        </AlertDialogPrimitive.Overlay>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.AlertDialog>
  );
}

export { EventLocationSearchDialog };
