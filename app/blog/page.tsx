"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, ArrowRight, Loader2 } from "lucide-react";
import { AnimatedSection } from "@/components/animations/animated-section"

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true)
        const response = await fetch('/api/blog', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (!response.ok) {
          throw new Error('Failed to fetch posts')
        }

        const data = await response.json()
        setPosts(data)
      } catch {
        setError('Failed to load blog posts')
      } finally {
        setLoading(false)
        console.log('Loading finished')
      }
    }

    fetchPosts()
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <AnimatedSection
            className="max-w-4xl mx-auto text-center"
            direction="fade"
            duration={0.8}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
              Our Blog
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
              Insights, updates, and thought leadership from the Ryudhis Company
              team. Stay informed about the latest trends in technology and
              business.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {loading ? (
              <AnimatedSection direction="up">
                <div className="text-center py-12">
                  <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
                  <h2 className="text-2xl font-semibold mb-4">
                    Loading posts...
                  </h2>
                  <p className="text-muted-foreground">
                    Please wait while we fetch the latest blog posts.
                  </p>
                </div>
              </AnimatedSection>
            ) : error ? (
              <AnimatedSection direction="up">
                <div className="text-center py-12">
                  <h2 className="text-2xl font-semibold mb-4 text-red-600">
                    Error
                  </h2>
                  <p className="text-muted-foreground">{error}</p>
                </div>
              </AnimatedSection>
            ) : posts.length > 0 ? (
              <div className="space-y-8">
                {posts.map((post) => (
                  <div key={post.id}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center space-x-1">
                            <CalendarDays className="h-4 w-4" />
                            <span>
                              {new Date(post.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <CardTitle className="text-2xl hover:text-primary transition-colors">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {post.excerpt ||
                            post.content
                              .replace(/<[^>]*>/g, "")
                              .substring(0, 200) + "..."}
                        </p>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                        >
                          Read More <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            ) : (
              <AnimatedSection direction="up">
                <div className="text-center py-12">
                  <h2 className="text-2xl font-semibold mb-4">
                    No blog posts yet
                  </h2>
                  <p className="text-muted-foreground">
                    Check back soon for our latest insights and updates.
                  </p>
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
