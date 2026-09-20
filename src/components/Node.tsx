import { Icon } from '@/components/Icon';

export type NodeState = 'done' | 'now' | 'next' | 'built' | 'pending';

/** The numbered circle sitting on the path spine. */
export function Node({ state, label, isFlag }: { state: NodeState; label: string; isFlag?: boolean }) {
  const styles: Record<NodeState, string> = {
    done: 'bg-ink text-paper',
    built: 'bg-ink text-paper',
    now: 'bg-ember text-white shadow-[0_0_0_7px_#FBE1D9]',
    next: 'border-2 border-[#D3C7B2] bg-paper text-ink-3',
    pending: 'border-2 border-dashed border-[#CDBFA6] bg-paper text-ink-3',
  };
  return (
    <div
      className={`absolute -left-[58px] top-5 grid h-10 w-10 place-items-center rounded-full font-mono text-[13px] font-bold ${styles[state]}`}
    >
      {state === 'done' ? <Icon name="check" className="h-4 w-4" /> : isFlag ? <Icon name="flag" className="h-4 w-4" /> : label}
    </div>
  );
}

/** Vertical line behind the nodes. */
export function Spine({ children, dashed = false }: { children: React.ReactNode; dashed?: boolean }) {
  return (
    <div className="relative pl-[58px]">
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-[19px] top-6 w-0.5"
        style={
          dashed
            ? { background: 'repeating-linear-gradient(to bottom,#CDBFA6 0 6px,transparent 6px 12px)' }
            : { background: '#E2D7C3' }
        }
      />
      {children}
    </div>
  );
}
