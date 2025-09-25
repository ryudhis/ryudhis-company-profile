import { redirect, notFound } from "next/navigation"
import { getSession } from "@/lib/session"
import { prisma } from "@/lib/prisma"
import { PostForm } from "@/components/admin/post-form"

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const user = await getSession()

  if (!user || user.role !== "ADMIN") {
    redirect("/admin/login")
  }

  const { id } = await params
  const post = await prisma.post.findUnique({
    where: { id },
  })

  if (!post) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Edit Post</h1>
        <p className="text-muted-foreground">Update your blog post</p>
      </div>

      <PostForm post={post} />
    </div>
  )
}
