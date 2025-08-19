import OSContributionCard from '@/components/openSource/Card';
import { Bricolage } from '@/utils/fonts';
import { contributions } from '@/components/openSource/contributions';
import { cn } from '@/lib/utils';

const OpenSource = () => {
  return (
    <main className={cn('mt-20 min-h-screen bg-neutral-50 dark:bg-neutral-950', Bricolage)}>
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h1 className="mb-8 text-xl font-bold lg:text-4xl">Open Source Contributions</h1>
          </div>
          <div className="space-y-4">
            {contributions.map((contribution, idx) => (
              <OSContributionCard key={idx} {...contribution} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default OpenSource;
