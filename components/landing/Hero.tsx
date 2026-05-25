'use client';

import { heroConfig, skillComponents, socialLinks } from '@/config/Hero';
import { roboticsHeroConfig, roboticsSkillComponents, roboticsSocialLinks } from '@/config/HeroRobotics';
import { useMode } from '@/hooks/ModeContext';
import { parseTemplate } from '@/lib/hero';
import { cn } from '@/lib/utils';
import { BadgeCheck, ChevronRight, Copy } from 'lucide-react';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React, { useState } from 'react';

import Container from '../common/Container';
import Skill from '../common/Skill';
import CV from '../svgs/CV';
import Chat from '../svgs/Chat';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

const buttonIcons = {
  CV: CV,
  Chat: Chat,
};

const socialUsernames: Record<string, string> = {
  X: '@not_aspirant',
  Github: 'sushil016',
};

export default function Hero() {
  const [isCommandCopied, setIsCommandCopied] = useState(false);
  const { mode } = useMode();
  const isRobotics = mode === 'robotics';
  const config = isRobotics ? roboticsHeroConfig : heroConfig;
  const activeSkillComponents = isRobotics ? roboticsSkillComponents : skillComponents;
  const activeSocialLinks = isRobotics ? roboticsSocialLinks : socialLinks;
  const { name, title, avatar, skills, description, buttons } = config;
  const command = 'npx asp-doctor --flag';

  const copyCommand = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(command);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = command;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
      }

      setIsCommandCopied(true);
      setTimeout(() => setIsCommandCopied(false), 1600);
    } catch (error) {
      console.error('Failed to copy command: ', error);
    }
  };

  const renderDescription = () => {
    const parts = parseTemplate(description.template, skills);

    return parts.map((part) => {
      if (part.type === 'skill' && 'skill' in part && part.skill) {
        const SkillComponent = activeSkillComponents[
          part.skill.component as keyof typeof activeSkillComponents
        ] as React.ComponentType;
        return (
          <Skill key={part.key} name={part.skill.name} href={part.skill.href}>
            <SkillComponent />
          </Skill>
        );
      } else if (part.type === 'bold' && 'text' in part) {
        return (
          <b key={part.key} className="text-primary whitespace-pre-wrap">
            {part.text}
          </b>
        );
      } else if (part.type === 'text' && 'text' in part) {
        return (
          <span key={part.key} className="whitespace-pre-wrap">
            {part.text}
          </span>
        );
      }
      return null;
    });
  };

  return (
    <section className="relative overflow-hidden pt-4 pb-4 sm:pt-8 sm:pb-6">
      <Container className="relative mx-auto max-w-[800px]">
        <div className="relative overflow-hidden rounded-[28px] border border-black/[0.001] bg-white/[0.58] p-4 pb-6  sm:p-6 sm:pb-8 dark:border-white/[0.12] dark:bg-black/50 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_28px_80px_rgba(0,0,0,0.35)]">
          <div className="relative grid gap-5 sm:grid-cols-[116px_minmax(0,1fr)] sm:gap-6">
            <div className="flex sm:block">
              <div className="relative rounded-full border border-black/10 bg-white/55 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_18px_42px_rgba(0,0,0,0.1)] dark:border-white/15 dark:bg-white/[0.06] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_18px_42px_rgba(0,0,0,0.34)]">
                <span className="absolute right-2 bottom-2 size-3 rounded-full border-2 border-white bg-emerald-500 dark:border-black" />
                <Image
                  src={avatar}
                  alt={name}
                  width={104}
                  height={104}
                  priority
                  className="size-24 rounded-full bg-blue-300 object-cover sm:size-[104px] dark:bg-yellow-300"
                />
              </div>
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl dark:text-zinc-50">
                  {name}
                </h1>
                <BadgeCheck
                  className="size-5 text-blue-500 dark:text-blue-400"
                  strokeWidth={2.25}
                />
                <span className="rounded-[5px] border border-emerald-500/20 bg-emerald-500/10 px-2   py-1 text-[11px] font-medium text-emerald-700 dark:text-emerald-300">
                  Available for work
                </span>
              </div>

              <p className="mt-2 max-w-2xl text-sm font-medium leading-6 text-zinc-600 sm:text-base dark:text-zinc-300">
                {title}
              </p>

              <div className="relative mt-3 inline-flex h-10 max-w-full items-center gap-2 rounded-[1px] border bg-white/65 px-4 font-mono text-sm font-medium tracking-tight text-zinc-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_10px_24px_rgba(0,0,0,0.07)] backdrop-blur-xl dark:border-white/15 dark:bg-white/[0.06] dark:text-zinc-100 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_12px_34px_rgba(0,0,0,0.28)]">
                {isCommandCopied && (
                  <div className="absolute right-0 bottom-[calc(100%+8px)] rounded-full border border-emerald-500/20 bg-emerald-500/12 px-2.5 py-1 font-sans text-xs font-medium text-emerald-700 shadow-lg backdrop-blur-md dark:text-emerald-300">
                    Copied
                  </div>
                )}
                <ChevronRight className="size-4 shrink-0 text-zinc-500 dark:text-zinc-400" />
                <code className="min-w-0 truncate text-[12px]">
                  {command}
                </code>
                <button
                  type="button"
                  onClick={copyCommand}
                  className="flex size-6 shrink-0 items-center justify-center rounded text-zinc-500 transition hover:bg-black/5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-white"
                  aria-label="Copy install command"
                >
                  <Copy className="size-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="relative mt-5">
            <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1.5 text-sm leading-6 whitespace-pre-wrap text-neutral-600 dark:text-neutral-400">
              {renderDescription()}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              {buttons.map((button, index) => {
                const IconComponent =
                  buttonIcons[button.icon as keyof typeof buttonIcons];
                return (
                  <Button
                    key={index}
                    variant={button.variant as 'outline' | 'default'}
                    className={cn(
                      'h-9 rounded-[11px] border-black/10 px-3 text-xs shadow-[inset_0_1px_0_rgba(255,255,255,0.58)] dark:border-white/10',
                      button.variant === 'outline' &&
                        'bg-white/45 hover:bg-white/75 dark:bg-white/[0.05] dark:hover:bg-white/[0.1]',
                    )}
                  >
                    {IconComponent && <IconComponent />}
                    <Link href={button.href}>{button.text}</Link>
                  </Button>
                );
              })}

              <div className="flex items-center gap-2 pl-1">
                {activeSocialLinks.map((link) => {
                  const username = socialUsernames[link.name];

                  return (
                    <Tooltip key={link.name} delayDuration={0}>
                      <TooltipTrigger asChild>
                        <Link
                          href={link.href}
                          key={link.name}
                          className={cn(
                            'text-secondary flex items-center justify-center rounded-full transition hover:bg-black/5 hover:text-foreground dark:hover:bg-white/10',
                            username
                              ? 'group h-6 w-auto gap-1.5 px-1.5'
                              : 'size-6',
                          )}
                        >
                          <span className="size-4">{link.icon}</span>
                          {username && (
                            <span className="text-xs font-medium underline decoration-transparent underline-offset-4 transition group-hover:decoration-current">
                              {username}
                            </span>
                          )}
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{link.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_28px_80px_rgba(0,0,0,0.12)] 
