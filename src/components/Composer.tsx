'use client';

import type { RefObject } from 'react';
import type { BuildOptions, Depth, Level } from '@/types';
import { Icon, IconName } from '@/components/Icon';

const LEVELS: { value: Level; label: string }[] = [
  { value: 'Beginner', label: 'Beginner' },
  { value: 'Intermediate', label: 'Intermediate' },
];
const PACES: { value: number; label: string }[] = [
  { value: 1, label: '1 hr / week' },
  { value: 3, label: '3 hrs / week' },
  { value: 5, label: '5 hrs / week' },
];
const DEPTHS: { value: Depth; label: string }[] = [
  { value: 'Quick overview', label: 'Quick overview' },
  { value: 'Balanced', label: 'Balanced' },
  { value: 'Deep dive', label: 'Deep dive' },
];

function ChipSelect<T extends string | number>({
  icon,
  label,
  value,
  options,
  onChange,
}: {
  icon: IconName;
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (value: T) => void;
}) {
  const current = options.find((o) => o.value === value);
  return (
    <label className="chip cursor-pointer hover:border-ink-3 focus-within:outline focus-within:outline-2 focus-within:outline-ember">
      <Icon name={icon} />
      <span>{current?.label}</span>
      <Icon name="down" className="h-3.5 w-3.5 text-ink-3" />
      <select
        aria-label={label}
        value={String(value)}
        onChange={(e) => {
          const match = options.find((o) => String(o.value) === e.target.value);
          if (match) onChange(match.value);
        }}
        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
      >
        {options.map((o) => (
          <option key={String(o.value)} value={String(o.value)}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

interface ComposerProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: BuildOptions;
  onOptionsChange: (options: BuildOptions) => void;
  onSubmit: () => void;
  inputRef?: RefObject<HTMLInputElement>;
}

/** "I want to learn ____" - the prompt is a sentence the user finishes. */
export function Composer({ value, onChange, placeholder, options, onOptionsChange, onSubmit, inputRef }: ComposerProps) {
  const ready = value.trim().length >= 3;

  return (
    <form
      id="start"
      onSubmit={(e) => {
        e.preventDefault();
        if (ready) onSubmit();
      }}
      className="edge mx-auto w-full max-w-[820px] rounded-composer p-[2px] shadow-composer"
    >
      <div className="rounded-[32px] bg-surface px-5 pb-5 pt-6 text-left sm:px-8 sm:pt-7">
        <label
          htmlFor="topic"
          className="block text-[28px] font-semibold leading-[1.2] tracking-[-0.035em] text-ink-3 sm:text-[42px]"
        >
          I want to learn{' '}
          <span className="relative inline-block max-w-full align-baseline">
            {/* hidden twin sizes the field to its text */}
            <span aria-hidden="true" className="invisible block min-w-[6ch] whitespace-pre px-1">
              {value || placeholder}
            </span>
            <input
              id="topic"
              ref={inputRef}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              maxLength={48}
              autoComplete="off"
              spellCheck={false}
              className="absolute inset-0 h-full w-full border-b-2 border-ink bg-transparent px-1 font-semibold tracking-[-0.035em] text-ink caret-ember outline-none placeholder:text-ink/25"
            />
          </span>
        </label>

        <div className="mt-6 flex flex-col gap-4 sm:mt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            <ChipSelect
              icon="level"
              label="Level"
              value={options.level}
              options={LEVELS}
              onChange={(level) => onOptionsChange({ ...options, level })}
            />
            <ChipSelect
              icon="clock"
              label="Time per week"
              value={options.hoursPerWeek}
              options={PACES}
              onChange={(hoursPerWeek) => onOptionsChange({ ...options, hoursPerWeek })}
            />
            <ChipSelect
              icon="layers"
              label="Depth"
              value={options.depth}
              options={DEPTHS}
              onChange={(depth) => onOptionsChange({ ...options, depth })}
            />
          </div>
          <button type="submit" disabled={!ready} className={`btn ${ready ? '' : 'btn-off'}`}>
            Build my path <Icon name="spark" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </form>
  );
}
