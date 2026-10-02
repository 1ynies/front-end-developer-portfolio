import { motion } from 'motion/react'

export function FloatingCodeBlock() {
  return (
    <motion.div
      className="rounded-lg border border-border bg-surface p-5 font-mono text-[13px] leading-relaxed drop-shadow-[0_0_40px_hsl(142_72%_50%_/_0.15)] md:p-6"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <span className="text-muted">// construire l&apos;avenir</span>
      <br />
      <span className="text-primary">const</span>{' '}
      <span className="text-foreground">hiba</span> = {'{'}
      <br />
      {'  '}
      role: <span className="text-primary">&quot;Front-end Dev&quot;</span>,
      <br />
      {'  '}
      stack: [
      <span className="text-primary">&quot;React&quot;</span>,{' '}
      <span className="text-primary">&quot;TypeScript&quot;</span>,{' '}
      <span className="text-primary">&quot;Tailwind&quot;</span>],
      <br />
      {'  '}
      open: <span className="text-primary">true</span>
      <br />
      {'}'}
    </motion.div>
  )
}
