import OSContributionCard from "@/components/openSource/Card";
import { Bricolage } from "@/utils/fonts";
import { contributions } from "@/components/openSource/contributions";

const OpenSource = () => {
  return (
    <main className={`${Bricolage} min-h-screen mt-20 bg-neutral-50 dark:bg-neutral-950`}>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Open Source Contributions</h1>
            <p className="text-lg text-muted-foreground">
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
  )
}

export default OpenSource;
