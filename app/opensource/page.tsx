import OSContributionCard from '@/components/openSource/Card';
import { Bricolage } from '@/utils/fonts';
import { contributions } from '@/components/openSource/contributions';

const OpenSource = () => {
  return (
    <main className={`${Bricolage} mt-20 min-h-screen bg-neutral-50 dark:bg-neutral-950`}>
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold">Open Source Contributions</h1>
            <p className="text-muted-foreground text-lg">
              Projects I've contributed to and created in the open source community
            </p>
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
