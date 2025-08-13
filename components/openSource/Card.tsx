import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GitFork, Star } from 'lucide-react';

interface OSSContributionCardProps {
  title: string;
  description: string;
  repo: string;
  url: string;
  language?: string;
  stars?: number;
  forks?: number;
}

const OSContributionCard = ({
  title,
  description,
  repo,
  url,
  language,
  stars,
  forks,
}: OSSContributionCardProps) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block">
      <Card className={`group cursor-pointer transition-shadow duration-200 hover:shadow-md`}>
        <CardHeader>
          <div>
            <div className="flex items-center justify-between">
              <CardTitle className="font-semibold lg:text-lg">{title}</CardTitle>

              {(stars !== undefined || forks !== undefined) && (
                <div className="text-muted-foreground flex items-center gap-1 text-xs lg:gap-3">
                  {language && (
                    <Badge variant="outline" className="text-[10px] lg:text-xs">
                      {language}
                    </Badge>
                  )}
                  {stars !== undefined && (
                    <div className="flex items-center gap-1">
                      <Star className="size-2.5 lg:size-3" />
                      <span>{stars}</span>
                    </div>
                  )}
                  {forks !== undefined && (
                    <div className="flex items-center gap-1">
                      <GitFork className="size-2.5 lg:size-3" />
                      <span>{forks}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            <CardDescription className="text-muted-foreground text-[12px] lg:text-sm">
              {repo}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-3">
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </a>
  );
};

export default OSContributionCard;
