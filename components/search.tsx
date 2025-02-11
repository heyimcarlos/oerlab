'use client'

import { CommandIcon, FileIcon } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTrigger, DialogClose, DialogTitle } from '@/components/ui/dialog'
import { useCallback, useEffect, useMemo, useState } from 'react'
import Anchor from './anchor'
import { advanceSearch, cn } from '@/lib/utils'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from './ui/button'

export default function Search() {
  const [searchedInput, setSearchedInput] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.key === 'k' && (event.metaKey || event.ctrlKey)) || event.key === '/') {
        if (
          (event.target instanceof HTMLElement && event.target.isContentEditable) ||
          event.target instanceof HTMLInputElement ||
          event.target instanceof HTMLTextAreaElement ||
          event.target instanceof HTMLSelectElement
        ) {
          return
        }
        event.preventDefault()
        setOpen(true)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const filteredResults = useMemo(() => advanceSearch(searchedInput.trim()), [searchedInput])

  return (
    <div>
      <Dialog
        open={open}
        onOpenChange={(open) => {
          if (!open) setSearchedInput('')
          setOpen(open)
        }}
      >
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              'relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-56 xl:w-64'
            )}
          >
            <span className="hidden lg:inline-flex">Search documentation...</span>
            <span className="inline-flex lg:hidden">Search...</span>
            <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              <CommandIcon size={10} />K
            </kbd>
          </Button>
        </DialogTrigger>
        <DialogContent className="p-0 max-w-[650px] sm:top-[38%] top-[45%] !rounded-md">
          <DialogTitle className="sr-only">Search</DialogTitle>
          <DialogHeader>
            <input
              value={searchedInput}
              onChange={(e) => setSearchedInput(e.target.value)}
              placeholder="Type something to search..."
              autoFocus
              className="h-14 px-6 bg-transparent border-b text-[14px] outline-none"
            />
          </DialogHeader>
          {filteredResults.length == 0 && searchedInput && (
            <p className="text-muted-foreground mx-auto mt-2 text-sm">
              No results found for <span className="text-primary">{`"${searchedInput}"`}</span>
            </p>
          )}
          <ScrollArea className="max-h-[400px] overflow-y-auto">
            <div className="flex flex-col items-start overflow-y-auto sm:px-2 px-1 pb-4">
              {filteredResults.map((item) => {
                const level = (item.href.split('/').slice(1).length - 1) as keyof typeof paddingMap
                const paddingClass = paddingMap[level]

                return (
                  <DialogClose key={item.href} asChild>
                    <Anchor
                      className={cn(
                        'dark:hover:bg-stone-900 hover:bg-stone-100 w-full px-3 rounded-sm text-sm flex items-center gap-2.5',
                        paddingClass
                      )}
                      href={`/docs${item.href}`}
                    >
                      <div
                        className={cn('flex items-center w-fit h-full py-3 gap-1.5 px-2', level > 1 && 'border-l pl-4')}
                      >
                        <FileIcon className="h-[1.1rem] w-[1.1rem] mr-1" /> {item.title}
                      </div>
                    </Anchor>
                  </DialogClose>
                )
              })}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  )
}

const paddingMap = {
  1: 'pl-2',
  2: 'pl-4',
  3: 'pl-10',
  // Add more levels if needed
} as const
