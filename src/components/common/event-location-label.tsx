import React from 'react';
import { cn, tv, VariantProps } from '@/lib';
import { Building, Church, Circle } from 'lucide-react';
import { EventLocationType, RequireSome } from '@/types';

const eventLocationLabelVariants = tv({
  slots: {
    root: 'inline-flex items-center',
    iconWrapper: 'inline-grid place-items-center rounded-full',
    icon: '',
  },
  variants: {
    type: {
      [EventLocationType.OnlineOnly]: {
        root: 'bg-[#BEFFD81A] text-[#84FFB6B8]',
        iconWrapper: 'bg-[#84FFB629]',
        icon: 'fill-[currentColor] text-[#84FFB6B8]',
      },
      [EventLocationType.ChurchLocation]: {
        root: 'bg-[#c4c8851a] text-[#e3e63eb8]',
        iconWrapper: 'bg-[#ebff8429]',
        icon: 'text-[#e3e63eb8]',
      },
      [EventLocationType.OtherLocation]: {
        root: 'bg-[#cfa9e51a] text-[#e684ffb8]',
        iconWrapper: 'bg-[#e684ff29]',
        icon: 'text-[#e684ffb8]',
      },
    },
    size: {
      sm: {
        root: 'gap-0.5 rounded-[3rem] py-0.5 pl-1 pr-2 text-[0.75rem] font-semibold leading-[1.5] tracking-[-0.01em]',
        iconWrapper: 'size-[0.7813rem]',
        icon: 'size-[0.4375rem]',
      },
      md: {
        root: 'gap-1 rounded-[3rem] py-1 pl-1.5 pr-2.5 text-b1 font-semibold leading-[1.5]',
        iconWrapper: 'size-4',
        icon: 'size-3',
      },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

type EventLocationVariantProps = VariantProps<typeof eventLocationLabelVariants>;

interface IEventLocationLabelProps extends RequireSome<EventLocationVariantProps, 'type'> {
  classNames?: Partial<typeof eventLocationLabelVariants.slots>;
}

const LabelMap = {
  [EventLocationType.OnlineOnly]: 'Online',
  [EventLocationType.ChurchLocation]: 'Church',
  [EventLocationType.OtherLocation]: 'Other',
};

const IconMap = {
  [EventLocationType.OnlineOnly]: Circle,
  [EventLocationType.ChurchLocation]: Church,
  [EventLocationType.OtherLocation]: Building,
};

const EventLocationLabel = ({ classNames, type, size }: IEventLocationLabelProps) => {
  const { root, iconWrapper, icon } = eventLocationLabelVariants({ type, size });

  const LABEL = LabelMap[type];
  const Icon = IconMap[type];

  return (
    <div className={cn(root({ className: classNames?.root }))}>
      <span className={cn([iconWrapper({ className: classNames?.iconWrapper })])}>
        <Icon className={cn([icon({ className: classNames?.icon })])} />
      </span>

      {LABEL}
    </div>
  );
};

export default EventLocationLabel;
