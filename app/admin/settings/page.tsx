import { redirect } from "next/navigation"
import { getSession } from "@/lib/session"
import { AdminProfileForm } from "@/components/admin/admin-profile-form"
import { AdminPasswordForm } from "@/components/admin/admin-password-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Shield } from "lucide-react"

export default async function AdminSettingsPage() {
  const user = await getSession()

  if (!user || user.role !== "ADMIN") {
    redirect("/admin/login")
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your admin account and preferences</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span>Profile Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <AdminProfileForm user={user} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Security</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <AdminPasswordForm />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>System Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <div className="font-medium text-muted-foreground">Database</div>
              <div>PostgreSQL (Supabase)</div>
            </div>
            <div>
              <div className="font-medium text-muted-foreground">Framework</div>
              <div>Next.js 14</div>
            </div>
            <div>
              <div className="font-medium text-muted-foreground">Deployment</div>
              <div>Vercel</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
