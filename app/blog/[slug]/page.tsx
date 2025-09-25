"use client"

import { useEffect, useState } from "react"
import { useParams, notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarDays, ArrowLeft, Loader2 } from "lucide-react";
import { AnimatedSection } from "@/components/animations/animated-section"

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [notFoundError, setNotFoundError] = useState(false)

  useEffect(() => {
    async function fetchPost() {
      if (!slug) return
      
      try {
        setLoading(true)
        const response = await fetch(`/api/blog/${slug}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (response.status === 404) {
          setNotFoundError(true)
          return
        }

        if (!response.ok) {
          throw new Error('Failed to fetch post')
        }

        const data = await response.json()
        setPost(data)
      } catch (err) {
        console.error('Error fetching post:', err)
        setError('Failed to load blog post')
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [slug])

  if (notFoundError) {
    notFound()
  }

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection direction="up">
              <div className="text-center py-12">
                <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
                <h2 className="text-2xl font-semibold mb-4">Loading post...</h2>
                <p className="text-muted-foreground">Please wait while we fetch the blog post.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection direction="up">
              <div className="text-center py-12">
                <h2 className="text-2xl font-semibold mb-4 text-red-600">Error</h2>
                <p className="text-muted-foreground">{error}</p>
                <Button asChild className="mt-4">
                  <Link href="/blog">Back to Blog</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    )
  }

  if (!post) {
    return null
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection direction="left">
            <Button asChild variant="ghost" className="mb-8">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.1}>
            <header className="mb-12">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center space-x-1">
                  <CalendarDays className="h-4 w-4" />
                  <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">{post.title}</h1>
              {post.excerpt && (
                <p className="text-xl text-muted-foreground text-balance leading-relaxed">{post.excerpt}</p>
              )}
            </header>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <article className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.3}>
            <footer className="mt-12 pt-8 border-t">
              <div className="flex justify-between items-center">
                <Button asChild variant="outline">
                  <Link href="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </footer>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
