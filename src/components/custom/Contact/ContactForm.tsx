import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  return (
    <Card className="w-[550px]">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-6">

            <div className="flex flex-row justify-between">
                <div className="flex flex-col space-y-1.5 w-[48%]">
                <Label htmlFor="name">First Name</Label>
                <Input id="name"  className="w-full"/>
                </div>


                <div className="flex flex-col space-y-1.5 w-[48%]">
                <Label htmlFor="name">Last Name</Label>
                <Input id="name" className="w-full"/>
                </div>
            </div>




            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Registered Phone</Label>
              <Input id="name" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Issue</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="general-issue">General Query</SelectItem>
                  <SelectItem value="payment-issue">Payment Issue</SelectItem>
                  <SelectItem value="account-issue">Account Issue</SelectItem>
                  <SelectItem value="bug-in-website">Report a Bug</SelectItem>
                </SelectContent>
              </Select>
            </div>




            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" />
            </div>




          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}
